import styled from 'styled-components'

const CardListRoot = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: auto;

    overflow: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;

    >div[class*="__CardRoot"] {
        @media (max-width: 1024px) {
            min-width: 45%;
            max-width: 50%;
        }
    
        @media (max-width: 768px) {
            min-width: 60%;
            max-width: 320px;
        }
    }
`

export default CardListRoot