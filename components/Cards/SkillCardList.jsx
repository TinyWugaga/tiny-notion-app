import styled from 'styled-components'

import CardList from 'components/Cards/CardList'
import SkillCard from 'components/Cards/SkillCard'

const SkillCardListRoot = styled(CardList)`
    width: 100%;

    >div {
        flex: 1 1 25%;
    }
`

const SkillCardList = ({ skills }) => {
    return (
        <SkillCardListRoot>
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
        </SkillCardListRoot>
    )
}

export default SkillCardList