import { keyBy, keys } from 'lodash'
import axios from 'axios';
import useSWR from 'swr'

const skillsFetcher = async (databaseId, data) => {
    const url = `/api/notion/databases/${databaseId}`
    return axios.post(url, { ...data }).then(res => res.data)
}

/*============================================
 *== SkillCategories
 *============================================*/

export const getSkillCategoriesFromDataBase = (data) => {
    const catagoriesName = keys(keyBy(data, 'properties.categories.select.name'))
    return catagoriesName.filter(category => category !== 'undefined')
}

const skillCategoriesFetcher = async (databaseId) => {
    return skillsFetcher(databaseId)
        .then(data => getSkillCategoriesFromDataBase(data))
        .catch(error => console.log('Fetch Skill Categories Failed:', error))
}

export const useFetchSkillCategories = (databaseId) => {
    const { data } = useSWR(databaseId, skillCategoriesFetcher)
    return data || []
}

/*============================================
 *== SkillsByCategory
 *============================================*/

 export const skillsByCategoryFetcher = async (databaseId, category) => {
    return skillsFetcher(databaseId, {
        filter: {
            property: 'categories',
            type: 'select',
            option: {
                equals: category
            }
        }
    }).catch(error => console.log('Fetch Skills By Category Failed:', error))
}

export const useFetchSkillsByCategory = (databaseId, category) => {
    const { data } = useSWR(
        () => category ? [databaseId, category] : null,
        skillsByCategoryFetcher
    )

    return data || []
}