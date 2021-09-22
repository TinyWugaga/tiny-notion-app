import styled from 'styled-components'

const HeaderWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: var(--header-height);
    left: 0px;
    top: 0px;
    padding: 0.5rem 2.4rem;

    background: rgba(255, 255, 255, 0.15);

    display: flex;
    justify-content: flex-start;
    margin-bottom: 25px;
`

const HeaderTitle = styled.h1`
    position: relative;
    width: 100%;
    height: 100%;
    margin: auto;

    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
    line-height: 1.2;
    text-align: center;
    color: #565656;
    
    display: flex;
    align-items: center;

    text-transform: capitalize;
`

const Header = (props) => {
    const { title } = props
    return (
        <HeaderWrapper>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderWrapper>
    )

}

export default Header