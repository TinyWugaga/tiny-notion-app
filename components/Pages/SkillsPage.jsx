import Link from 'next/link'

import BasicLayout from 'layouts/BasicLayout'

import Header from 'components/Header'
import Main from 'components/Main'
import Section from 'components/Section'
import Footer from 'components/Footer'

const classes = {
    root: {
        color: '#565656',
        background: 'linear-gradient(180deg, rgba(151, 195, 221, 0.84) 0%, #97C3DD 29.69%, #8EB8D0 100%)',
        textAlign: 'center',
        fontFamily: 'Roboto Mono',
    }
}

const SkillsPage = ({ children, ...props }) => {
    const { category, title, sections } = props

    const Title = (title) => (
        <Link href={'/skills'}>
            <a>{title}</a>
        </Link>
    )

    return (
        <BasicLayout
            className="SkillsPage"
            classes={classes}
            title={`Skill List${category ? `: ${category}` : ''}`}
        >
            <Header title={Title(title)} />

            <Main>
                {sections?.map((section, index) => (
                    <Section key={index}>
                        <section.component category={category} />
                    </Section>
                ))}
                {children && children}
            </Main>

            <Footer />

        </BasicLayout>
    )

}

export default SkillsPage