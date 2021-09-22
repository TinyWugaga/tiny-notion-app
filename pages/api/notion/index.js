const notionInfoPage = `
    <div>This API is for user to query databases / pages</div>
`

export default function handler(req, res) {
    res.status(200).send(notionInfoPage)
}