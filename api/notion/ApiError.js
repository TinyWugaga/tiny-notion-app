import _ from 'lodash'
import { APIErrorCode } from '@notionhq/client'

const userMsgMap = {
  [ObjectNotFound]: '找不到相關資料，請確認搜尋條件。',
}
export class ApiError extends Error {
  constructor({ category = '', code, detail }) {
    super()
    code = code ? _.capitalize(_.camelCase(code)) : 'Unknown'
    const userMsg = userMsgMap[code]

    this.code = code
    this.name = `Api/${category}${code}Error`
    this.message = `${this.name}: ${detail.message || ''}`
    this.detail = Object.assign({}, detail, { userMsg })
    console.warn(this, this.detail)
  }
  get userMsg() {
    return this.detail.userMsg
  }
  /**
   * * define `code constant` here for err.code comparison
   * e.g. if ( err.code === ApiError.Cancel )
   */
  static ObjectNotFound = APIErrorCode.ObjectNotFound
}
