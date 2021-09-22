import { useState } from 'react'

import { keyBy, keys } from 'lodash'
import axios from 'axios';
import useSWR from 'swr'

export const useFetchSkillCategories = (databaseId) => {
    const [categories, setCategories] = useState([])

    const skillCategoriesFetcher = async (url) => axios.post(url)
        .then(res => {
            const catagoriesName = keys(keyBy(res.data, 'properties.categories.select.name'))
            setCategories(catagoriesName.filter(category => category !== 'undefined'))
        })

    const { data } = useSWR(
        `/api/notion/databases/${databaseId}`,
        skillCategoriesFetcher
    )

    return categories
}

export const useFetchSkillsByCategory = (databaseId, category) => {
    const [skills, setSkills] = useState([])

    const skillsByCategoryFetcher = async (url, category) => axios.post(url, {
        filter: {
            property: 'categories',
            type: 'select',
            option: {
                equals: category
            }
        }
    }).then(res => {
        setSkills(res.data)
        return res.data
    }).catch(error => console.log('Fetch Skills By Category Failed:', error))

    const { data } = useSWR(() => category ? [
        `/api/notion/databases/${databaseId}`,
        category
    ] : null, skillsByCategoryFetcher)

    return skills
}