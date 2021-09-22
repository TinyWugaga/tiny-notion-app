import styled from 'styled-components'

const BadgeRoot = styled.div`
    margin: .2rem .25rem;
    padding: .24rem .5rem;
    border-radius: 20px;
    line-height: 1.5;
    font-size: .8rem;
    font-weight: 600;
    letter-spacing: .02em;
    border: none;
    outline: none;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    color: inherit;
    background: ${({color}) => `var(--notion-color-${color}, #dc4f6a8a)`} ;
    transition: color .2s linear var(--c-d, .2s), background .3s linear var(--b-d, .2s);
`

const Badge = ({ className, color, value}) => {
    return (
        <BadgeRoot className={className} color={color}>
            {value}
        </BadgeRoot>
    )
}

export default Badge