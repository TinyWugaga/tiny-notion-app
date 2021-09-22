import { Client } from "@notionhq/client"
import Database from "./Database"

const client = new Client({ auth: process.env.NOTION_KEY })

export const database = new Database(client)



