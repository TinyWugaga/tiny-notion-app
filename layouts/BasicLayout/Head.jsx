import NextHead from 'next/head'

const Head = ({ children, ...props }) => {
    const { title } = props
    return (
        <NextHead>
            <title>{title}</title>
            <meta name="description" content="Get Skill List of Tiny" />
            <link rel="icon" href="/favicon.ico" />
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Roboto+Mono"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Raleway"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat"
                rel="stylesheet"
            />
            {children}
        </NextHead>
    )
}

export default Head