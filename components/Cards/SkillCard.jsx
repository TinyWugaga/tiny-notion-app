import styled from "styled-components"

import { getTitleValue, getRichTextValue } from 'utils/notion/typeValues'

import FlipCard from 'components/Cards/FlipCard'
import SkillBar from 'components/SkillBar'
import Badge from 'components/Badges/Badge'
import BadgeList from 'components/Badges/BadgeList'

const SkillCardTitleIcon = styled.div`
    flex: 1 1 20%;
    position: relative;
    margin: auto;
    margin-right: 5px;
    
    width: 2rem;
    height: 100%;

    ${({ url }) => url && `background: url('${url}');`}

    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
`

const SkillCardTitleText = styled.div`
    flex: 3 2 80%;

    position: relative;
    margin: auto 0;
`

const SkillCardBackContainer = styled.div`
    flex: 1;
    overflow-y: auto;

    >p {
        margin: 0;
        text-align: center;
        padding-top: 5px;
    }
`

const FlipCardSkillBar = styled(SkillBar)`
    --skill-bar-animation-delay: .16s;

    animation: show-delay .32s 1;
    @keyframes show-delay {
        0% {
            opacity: 0%;
        }
        75% {
            opacity: 20%;
        }
        90% {
            opacity: 40%;
        }
        100% {
            opacity: 100%;
        }
    }
`

const SkillCardBadgeList = styled(BadgeList)`
    flex: 1;
    
    justify-content: flex-start;
    margin-top: 1rem;
    min-height: 2rem;

    overflow-x: auto;
`

const SkillCardBadge = styled(Badge)`
    box-shadow: 0 3px 2px 0 rgba(120,50,70,0.2);
`

const SkillCard = ({ skill, classes, ...props }) => {
    const { icon, properties } = skill
    const {
        name,
        degree,
        tags,
        description
    } = properties

    const title = ({ icon, name }) => (
        <>
            {icon &&
                <SkillCardTitleIcon url={icon[icon.type].url} />
            }
            <SkillCardTitleText>{getTitleValue(name)}</SkillCardTitleText>
        </>
    )

    const frontContent = (value) => (
        <div>
            <FlipCardSkillBar
                value={value}
                label="使用程度"
            />
        </div>
    )
    const backContent = (description) => (
        <SkillCardBackContainer>
            <p>
                {getRichTextValue(description)}
            </p>
        </SkillCardBackContainer>
    )

    const skillCardClasses = {
        title: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            textShadow: '0px 2px 1px rgba(250,250,250,0.4)',
        },
        ...classes,
    }

    return (
        <FlipCard
            title={title({ icon, name })}
            classes={skillCardClasses}
            frontContent={degree.number && frontContent(degree.number)}
            backContent={description && backContent(description)}
            {...props}
        >
            <SkillCardBadgeList>
                {tags.multi_select.map((tag, index) =>
                    <SkillCardBadge
                        key={index}
                        value={tag.name}
                        color={tag.color}
                    />
                )}
            </SkillCardBadgeList>
        </FlipCard>
    )
}
export default SkillCard