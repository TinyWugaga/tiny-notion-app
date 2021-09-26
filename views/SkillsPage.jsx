import BasicLayout from 'layouts/BasicLayout'
import SkillCardList from 'components/Cards/SkillCardList'

import { databaseId, useFetchSkillsByCategory } from 'utils/notion/Databases/skills'

const classes = {
    root: {
        color: '#565656',
        background: 'linear-gradient(180deg, rgba(151, 195, 221, 0.84) 0%, #97C3DD 29.69%, #8EB8D0 100%)',
        textAlign: 'center',
        fontFamily: 'Roboto Mono',
    }
}

const SkillsPage = ({ children, ...props }) => {
    const { category, header, sections } = props

    const skills = useFetchSkillsByCategory(databaseId, category)

    return (
        <BasicLayout
            className="SkillsPage"
            classes={classes}
            pageTitle={`Skill List${category ? `: ${category}` : ''}`}
            header={header}
            sections={sections}
        >
            {
                skills.length !== 0 && (
                    <SkillCardList skills={skills} />
                )
            }
        </BasicLayout>
    )

}

export default SkillsPage