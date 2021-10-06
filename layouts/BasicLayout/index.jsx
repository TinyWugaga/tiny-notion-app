import styled from 'styled-components'

import Head from './Head'
import Header from 'components/Header'
import Main from 'components/Main'
import Section from 'components/Section'
import Footer from 'components/Footer'


const PageContainer = styled.div`
    min-height: 100vh;
    margin: 0;
    padding: 0;

    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;

    overflow: hidden;

    ${({ classes }) => classes}
`

const BasicLayout = ({ classes = {}, className, children, ...props }) => {
    const { pageTitle, header, sections } = props
    return (
        <PageContainer className={className} classes={classes.root}>
            <Head title={pageTitle} />

            <Header {...header} />

            <Main>
                {sections?.map((section, index) => (
                    <Section key={index}>
                        <section.component {...section.props} />
                    </Section>
                ))}
                {children && (
                    <Section>{children}</Section>
                )}
            </Main>

            <Footer />
        </PageContainer>
    )

}

export default BasicLayout