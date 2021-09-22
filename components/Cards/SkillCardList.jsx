import styled from 'styled-components'

import { databaseId, useFetchSkillsByCategory } from 'utils/notion/Databases/skills'

import SkillCard from 'components/Cards/SkillCard'
import CardList from 'components/Cards/CardList'

const SkillCardList = styled(CardList)`
    width: 100%;

    >div {
        flex: 1 1 25%;
    }
`

const SkillCardListComponent = ({ category }) => {
    const skills = useFetchSkillsByCategory(databaseId, category)
    return (
        <SkillCardList>
            {
                skills.length
                    ? skills.map((skill, index) =>
                        <SkillCard
                            key={index}
                            skill={skill}
                        />
                    )
                    : (<div> Loading... </div>)
            }
        </SkillCardList>
    )
}

export default SkillCardListComponent