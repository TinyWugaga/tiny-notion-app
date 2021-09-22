import clsx from 'clsx'
import { useState } from 'react'
import styled, { css } from 'styled-components'

import Card from './Card'

const FlipCardAnimation = css`
    @keyframes flip {
        0% {
            transform: rotateY(0deg);
            opacity: 0.7;
        }
        30% {
            transform: rotateY(-120deg);
            opacity: 0.5;
        }
        50% {
            transform: rotateY(-180deg);
            opacity: 0.2;
        }
        70% {
            transform: rotateY(-120deg);
            opacity: 0.7;
        }
        100% {
            transform: rotateY(0deg);
            opacity: 1;
        }
    }

    @keyframes flip-content {
        0% {
            opacity: 0.7;
        }
        30% {
            opacity: 0.5;
        }
        50% {
            opacity: 0.2;
        }
        70% {
            opacity: 0.7;
        }
        100%{
            opacity: 1;
        }
    }
`

const FlipStyle = css`
    color: #78706c;
    background: #fdfdfd;
    border-color: #efefef;
`

const FlipCardRoot = styled(Card)`
    height: 200px;
    cursor: pointer;

    background-size: cover;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    transition: transform .5s cubic-bezier(0.4, 0.2, 0.2, 1), opacity .5s cubic-bezier(0.4, 0.2, 0.2, 1);
    backface-visibility: hidden;
    
    transform: rotateY(0deg);
    transform-style: preserve-3d;

    color: #7a6666;
    background: #f4eaea;
    border-color: #b0b0b0;
    ${({flipContent}) => flipContent && FlipStyle};

    &.flip {
        animation: flip .5s 1;

        [class*="FlipCardWrapper"] {
            animation: flip-content .5s 1;
        }
    }

    ${FlipCardAnimation}
`

const FlipCard = ({ children, ...props }) => {
    const { frontContent, backContent } = props
    const [flip, setFlip] = useState(0)
    const [flipContent, setFlipContent] = useState(0)

    const handleCardClick = () => {
        setFlip(1)
        setTimeout(() => setFlipContent(flipContent ? 0 : 1), 200)
    }

    return (
        <FlipCardRoot
            className={clsx({['flip']: flip})}
            onClick={handleCardClick}
            onAnimationEnd={() => setFlip(0)}
            flipContent={flipContent}
            {...props}
        >
                {!flipContent ? frontContent : backContent}
                {children}
        </FlipCardRoot>
    )

}

export default FlipCard