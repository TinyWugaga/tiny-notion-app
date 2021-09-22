import Link from 'next/link'

import SkillsPage from 'components/Pages/SkillsPage'
import CardList from 'components/Cards/CardList'
import Card from 'components/Cards/Card'

const cardClasses = {
  root: {
    width: '150px',
    height: '120px',
  },
  content: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default function Skills() {
  return (
    <SkillsPage title="Skills">
      <CardList>
          <Link href={`/skills`} as={process.env.BACKEND_URL +'/skills'}>
            <a>
              <Card classes={cardClasses}>
                Skills Board
              </Card>
            </a>
          </Link>
      </CardList>
    </SkillsPage>
  )
}