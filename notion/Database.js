import isEmpty from 'lodash/isEmpty';

const defaultFilter = {
    property: 'name',
    text: {
        is_not_empty: true
    }
}

class Database {

    _filter = {}
    _sorts = []

    constructor(client) {
        this._client = client
    }

    async query(databaseId) {
        if (!databaseId) {
            throw Error(`There no available databaseId`)
        }

        const options = {
            database_id: databaseId,
            filter: !isEmpty(this._filter) ? this._filter : defaultFilter,
            sorts: this._sorts
        }

        try {
            const databases = []
            let cursor = undefined

            while (true) {
                const { results, next_cursor } = await this._client.databases.query({
                    ...options,
                    start_cursor: cursor,

                })
                databases.push(...results)
                if (!next_cursor) {
                    break
                }
                cursor = next_cursor
            }

            console.log(`Notion Database: query success`);
            this._resetOptions()

            return databases
        } catch (error) {
            console.warn(`Notion Database: query error`)
            throw error
        }
    }

    filter({ property, type, option }) {
        if (property && type && !isEmpty(option)) {
            this._filter = {
                property,
                [type]: option
            }
        }
        return this
    }

    compoundFilter({ compound, conditions }) {
        if (compound && conditions) {
            this._filter = {}
            conditions.map(condition => {
                const { property, type, option } = condition
                this._filter[compound].push({
                    property,
                    [type]: option
                })
            })
        }
        return this
    }

    sorts(property, { timestamp = "created_time", direction = "ascending" }) {
        this._sorts.push({ property, timestamp, direction })
        return this
    }

    _resetOptions() {
        this._filter = {}
        this._sorts = []
    }
}

export default Database