import {
    databaseId,
    getSkillCategoriesFromDataBase
} from 'utils/notion/Databases/skills'

import { databasesQueryHandler } from 'utils/notion/Databases/handler'

import SkillsPage from 'views/SkillsPage'
import { BackCircleIcon } from 'assets/Icons'

export default function SkillsCategory({ category }) {

    const header = {
        title: category || '',
        icon: <BackCircleIcon width={45} height={45} />,
        link: '/skills'
    }

    return (
        <SkillsPage
            category={category}
            header={header}
        />
    )
}

export async function getStaticPaths() {
    const data = await databasesQueryHandler(databaseId, {})
    const categories = getSkillCategoriesFromDataBase(data)

    return {
        paths: categories?.map(category => {
            return {
                params: { category }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context

    return {
        props: {
            category: params.category
        }
    }
}

