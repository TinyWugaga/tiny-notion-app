export const githubPageImageLoader = ({ src, width, quality }) => {
    return `https://tinywugaga.github.io/teacher-schedule${process.env.BACKEND_URL}/${src}?w=${width}&q=${quality || 75}`
}