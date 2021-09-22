import styled from 'styled-components'

import Image from 'next/image'

import styles from 'styles/Page.module.css'

const FooterRoot = styled.footer`
    width: 100%;
    padding-top: var(--footer-height);
    position: absolute;
    bottom: 0%;
    border-top: 1px solid #919ea4;

    background: rgba(0, 0, 0, 0.05);
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
    }
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
                    <span className={styles.logo}>
                        <Image src="/logo.svg" alt="TNT Logo" width={72} height={16} />
                    </span>
                </a>
            </FooterWrapper>
        </FooterRoot>
    )
}

export default Footer