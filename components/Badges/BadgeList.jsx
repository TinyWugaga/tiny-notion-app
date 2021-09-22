import styled from 'styled-components'

const BadgeList = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    overflow: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    ${({classes}) => classes}
`

export default BadgeList