import Link from 'next/link'

import { databaseId, useFetchSkillCategories } from 'utils/notion/Databases/skills'

import SkillsPage from 'components/Pages/SkillsPage'
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

export default function Skills() {
  const categories = useFetchSkillCategories(databaseId)

  return (
    <SkillsPage title="Skills">
      <CardList>
        {categories?.map((category, index) => (
          <Link key={index} href={`/skills/${category}`} passHref>
            <a>
              <Card classes={cardClasses}>
                {category}
              </Card>
            </a>
          </Link>
        ))}
      </CardList>
    </SkillsPage>
  )
}
