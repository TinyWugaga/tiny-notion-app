import { forwardRef } from 'react'
import styled from 'styled-components'

import Link from 'next/link'

const HeaderRoot = styled.div`
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

const HeaderContainer = styled.h1`
    position: relative;
    width: 100%;
    height: 100%;
    margin: auto;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.2;
    text-align: center;
    color: #565656;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;

    text-transform: uppercase;
`

const HeaderIcon = styled.span`
    height: 100%;
    margin-right: 0.5rem;
    vertical-align: middle;
`

const HeaderTitle = forwardRef(({ onClick, href, icon, title }, ref) => (
    <a href={href} onClick={onClick} ref={ref}>
        {icon && (
            <HeaderIcon>{icon}</HeaderIcon>
        )}
        {title}
    </a>
))

const Header = (props) => {
    const { icon, title, link } = props
    return (
        <HeaderRoot>
            <HeaderContainer>
                <Link
                    href={link}
                    as={process.env.BACKEND_URL + '/skills'}
                    passHref
                >
                    <HeaderTitle icon={icon} title={title} />
                </Link>
            </HeaderContainer>
        </HeaderRoot>
    )

}

export default Header