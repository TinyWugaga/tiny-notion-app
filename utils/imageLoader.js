export const githubPageImageLoader = ({ src, width, quality }) => {
    const githubDomain = 'https://tinywugaga.github.io' + process.env.BACKEND_URL
    return `${githubDomain}/${src}?w=${width}&q=${quality || 75}`
}