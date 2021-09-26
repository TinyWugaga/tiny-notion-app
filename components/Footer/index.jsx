import styled from 'styled-components'

import { default as Logo } from 'assets/Logo'

const FooterRoot = styled.footer`
    width: 100%;
    padding-top: var(--footer-height);
    position: absolute;
    bottom: 0%;
    border-top: 1px solid #919ea4;

    background: rgba(40, 50, 80, 0.1);
`

const FooterWrapper = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  
    a {
        display: inline-block;
        line-height: 1.5;
    }
`

const FooterLogo = styled.span`
    margin-left: 0.2rem;
    vertical-align: middle;
`

const Footer = () => {
    return (
        <FooterRoot>
            <FooterWrapper>
                <a
                    href="https://scratch-carbon-250.notion.site/Hello-This-is-Tiny-cd0c13d727ec4c7197d91b7346ac57ab"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <FooterLogo>
                        <Logo
                            width={110}
                            height={30}
                        />
                    </FooterLogo>
                </a>
            </FooterWrapper>
        </FooterRoot>
    )
}

export default Footer