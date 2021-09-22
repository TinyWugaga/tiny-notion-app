import { reduce, values, mapValues } from 'lodash'

export const types = [
    "rich_text",
    "number",
    "select",
    "multi_select",
    "date",
    "formula",
    "relation",
    "rollup",
    "title",
    "people",
    "files",
    "checkbox",
    "url",
    "email",
    "phone_number",
    "created_time",
    "created_by",
    "last_edited_time",
    "last_edited_by"
]

export function getRichTextValue(value) {
    /*============================================
     *== rich_text object
     * [
     *   {
     *      "type": "text",
     *      "text": {
     *          "content": "內容文字",
     *          "link": null
     *      },
     *      "annotations": {
     *          "bold": false,
     *          "italic": false,
     *          "strikethrough": false,
     *          "underline": false,
     *          "code": false,
     *          "color": "default"
     *      },
     *      "plain_text": "內容文字",
     *      "href": null
     *   }
     * ]
     *============================================*/

    return reduce(
        values(mapValues(value['rich_text'], 'plain_text')),
        (r, c) => r + ' ' + c
    )
}

export function getTitleValue(value) {
    /*============================================
     *== title object
     * [
     *   {
     *     "type": "text",
     *     "text": {
     *         "content": "標題文字",
     *         "link": null
     *     },
     *     "annotations": {
     *         "bold": false,
     *         "italic": false,
     *         "strikethrough": false,
     *         "underline": false,
     *         "code": false,
     *         "color": "default"
     *     },
     *     "plain_text": "標題文字",
     *     "href": null
     *   }
     * ]
     *============================================*/

    return reduce(
        values(mapValues(value.title, 'plain_text')),
        (r, c) => r + ' ' + c
    )
}