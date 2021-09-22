import { database } from 'api/notion'

export default async function handler({
  method,
  body,
  query: { databaseId },
}, res) {

  console.log('Database Request:', method, body)

  try {
    if (method === 'POST') {
      const { filter, filters, sorts } = body

      filter && database.filter(filter)
      filters && database.compoundFilter(filters)
      sorts && database.sorts(sorts)
    }

    const resp = await database.query(databaseId)
    res.status(200).json(resp)
  } catch (error) {
    // TODO: Design APIError
    res.status(404).json(error.message)
  }
}