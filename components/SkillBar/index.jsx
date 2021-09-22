import { useState } from 'react'
import styled, { css } from 'styled-components'

const SkillBarRoot = styled.div`
    position: relative;
    width: 100%;
    max-width: 378px;
    height: .9rem;

    margin-top: 2rem;

    background-color: #575757;
    box-shadow: 0 4px 2px 0 rgba(0,0,0,0.25);
`

const SkillBarLabel = styled.p`
    position: absolute;
    width: 100%;
    height: .8rem;
    top: -1.7rem;
    padding: 0 5px;

    font-size: .5rem;
    line-height: 1.2;
    text-align: left;
`

const SkillBarValueTag = css`
    &::before {
        content: '${({ value }) => value}';
        position: absolute;
        padding: .32rem .52rem;

        font-size: .32rem;
        top: -1.82rem;
        
        border-radius: 10px;
        background: #fafafa;
        box-shadow: 0 3px 4px 0 rgba(10,10,10,0.2); 
    }

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;

        top: -.38rem;
        
        border-radius: 5px;
        border-left: .32rem solid transparent;
        border-right: .32rem solid transparent;
        border-top: .6rem solid #fafafa;
    }

    &::before,
    &::after {
        right: 0;
        opacity: 0;
        transform: translateX(50%);
        transition: opacity .2s ease-in 0s;
        animation: show-tag 1.45s 1;
        animation-delay: var(--skill-bar-animation-delay, 0s);
    }


    @keyframes show-tag {
        0% {
            opacity: 0%;
        }
        50% {
            opacity: 100%;
        }
        70% {
            opacity: 100%;
        }
        100% {
            opacity: 0%;
        }
    }
`

const SkillBarValueShowTag = css`
    &::before,
    &::after {
        opacity: 1;
    }
`

const SkillBarValueAnimation = css`
    animation: run-value 1.4s 1;
    animation-delay: var(--skill-bar-animation-delay, 0s);

    @keyframes run-value {
        0% {
            width: 0%;
        }
        65% {
            width: 80%;
        }
        100% {
            width: 100%;
        }
    }

    ${({ hover }) => hover && SkillBarValueShowTag}
`

const SkillBarValue = styled.div`
    position: relative;
    width: 100%;
    max-width: calc(100% * ${({ value }) => (value / 10)});
    height: 100%;

    background-color: #dc4f6a;

    ${SkillBarValueTag}
    ${SkillBarValueAnimation}
`



const SkillBar = ({ className, label, value }) => {
    const [hover, setHover] = useState(false)

    return (
        <SkillBarRoot
            className={className}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <SkillBarLabel>{label}</SkillBarLabel>
            <SkillBarValue
                value={value}
                hover={hover}
            />
        </SkillBarRoot>
    )
}

export default SkillBar