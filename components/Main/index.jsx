import styled from 'styled-components'

const MainRoot = styled.main`
    position: absolute;
    top: 0;
    margin-top: var(--header-height);
    width: 100vw;
    height: calc(100% - var(--header-height) - var(--footer-height));

    overflow-x: hidden;
`
const MainContainer = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;

    overflow-y: scroll;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Main = ({ children }) => {
    return (
        <MainRoot>
            <MainContainer className="container">
                {children}
            </MainContainer>
        </MainRoot>
    )

}

export default Main