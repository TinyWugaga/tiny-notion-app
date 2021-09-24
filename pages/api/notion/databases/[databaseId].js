import { databasesQueryHandler } from 'utils/notion/Databases/handler'

export default async function handler({
  method,
  body,
  query: { databaseId },
}, res) {

  console.log('Database Request:', method, body)

  try {
    const resp = await databasesQueryHandler(databaseId, body)
    res.status(200).json(resp)
  } catch (error) {
    // TODO: Design APIError
    res.status(404).json(error.message)
  }
}