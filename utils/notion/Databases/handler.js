import { database } from 'notion'

export const databasesQueryHandler = async (databaseId, body) => {
  const { filter, filters, sorts } = body

  filter && database.filter(filter)
  filters && database.compoundFilter(filters)
  sorts && database.sorts(sorts)

  const resp = await database.query(databaseId)
  return JSON.parse(JSON.stringify(resp))
}