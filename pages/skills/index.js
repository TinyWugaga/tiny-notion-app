import Link from 'next/link'

import {
  databaseId,
  getSkillCategoriesFromDataBase,
  useFetchSkillCategories
} from 'utils/notion/Databases/skills'

import { databasesQueryHandler } from 'utils/notion/Databases/handler'

import SkillsPage from 'views/SkillsPage'
import CardList from 'components/Cards/CardList'
import Card from 'components/Cards/Card'

const cardClasses = {
  root: {
    width: '220px',
    height: '150px',
  },
  content: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
  }
}

const SkillCategoriesCardList = ({categories}) => (
  <CardList>
    {categories?.map((category, index) => (
      <Link key={index} href={`/skills/${category}`} as={process.env.BACKEND_URL + '/skills/' + category}>
        <a>
          <Card classes={cardClasses}>
            {category}
          </Card>
        </a>
      </Link>
    ))}
  </CardList>
)

export default function Skills({ categories, error }) {
  if (error) console.log(error)
  console.log('categories', categories)
  categories = categories || useFetchSkillCategories(databaseId) || []

  return (
    <SkillsPage
      title="Skills"
      sections={[
        {
          name: 'SkillCategoriesCardList',
          component: SkillCategoriesCardList,
          props: { categories }
        }
      ]}
    />
  )
}

export async function getServerSideProps(context) {
  console.log('Pre-rendering Skill Categories Page')
  try {
    const data = await databasesQueryHandler(databaseId, {})
    const categories = getSkillCategoriesFromDataBase(data)

    return {
      props: {
        categories: JSON.parse(JSON.stringify(categories))
      }
    }
  } catch (e) {
    console.log('Pre-rendering Skill Categories Page', e)
    return {
      props: {
        error: JSON.parse(JSON.stringify(e))
      }
    }
  }
}