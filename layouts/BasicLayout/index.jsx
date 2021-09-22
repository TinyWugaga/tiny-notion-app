import styled from 'styled-components'
import Head from './Head'

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

const BasicLayout = ({ classes={}, className, children, ...props }) => {
    const { title } = props
    return (
        <PageContainer className={className} classes={classes.root}>
            <Head title={title} />
            {children}
        </PageContainer>
    )

}

export default BasicLayout