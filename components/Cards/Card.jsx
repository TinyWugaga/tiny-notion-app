import styled from 'styled-components'

const CardRoot = styled.div`
    position: relative;
    width: calc(25% - 1.4rem);
    max-width: 387px;

    height: 150px;
    max-height: 100%;

    margin: 1rem .7rem;

    background-color: #fdfdfd;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
    
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;

    &:hover {
        transform: scale(1.05);
    }

    ${({ classes }) => classes}
`
const CardContainer = styled.div`
    padding: 1rem;
    height: 100%;

    display: flex;
    flex-direction: column;

    ${({ classes }) => classes}
`
const CardTitle = styled.h1`
    flex: 1;
    font-size: 1.2rem;
    margin: 5px auto;

    ${({ classes }) => classes}
`
const CardContent = styled.div`
    flex: 3;

    overflow: hidden;

    display: flex;
    flex-direction: column;

    ${({ classes }) => classes}
`

const Card = ({
    classes = {},
    className,
    children,
    title,
    ...props
}) => {
    return (
        <CardRoot className={className}
            classes={classes.root}
            {...props}
        >
            <CardContainer
                classes={classes.container}
            >
                {title && (
                    <CardTitle
                        classes={classes.title}
                    >
                        {title}
                    </CardTitle>
                )}
                <CardContent
                    classes={classes.content}
                >
                    {children}
                </CardContent>
            </CardContainer>
        </CardRoot>
    )

}

export default Card
