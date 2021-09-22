export default {
    name: "APIResponseError",
    code: "validation_error",
    status: 400,
    headers: {},
    body: {
        object: error,
        status: 400,
        code: validation_error,
        message: `body failed validation.
        Fix one: 
        body.filter.or should be defined, instead was"undefined".
        body.filter.and should be defined, instead was"undefined".
        body.filter.title should be defined, instead was"undefined".
        body.filter.text should be defined, instead was"undefined".
        body.filter.rich_text should be defined, instead was"undefined".
        body.filter.number should be defined, instead was"undefined".
        body.filter.checkbox should be defined, instead was"undefined".
        body.filter.select should be defined, instead was"undefined".
        body.filter.multi_select should be defined, instead was"undefined".
        body.filter.date should be defined, instead was"undefined".
        body.filter.people should be defined, instead was"undefined".
        body.filter.files should be defined, instead was"undefined".
        body.filter.url should be defined, instead was"undefined".
        body.filter.email should be defined, instead was"undefined".
        body.filter.phone should be defined, instead was"undefined".
        body.filter.phone_number should be defined, instead was"undefined".
        body.filter.relation should be defined, instead was"undefined".
        body.filter.created_by should be defined, instead was"undefined".
        body.filter.created_time should be defined, instead was"undefined".
        body.filter.last_edited_by should be defined, instead was"undefined".
        body.filter.last_edited_time should be defined, instead was"undefined".
        body.filter.formula should be defined, instead was"undefined".
        body.filter.rollup should be defined, instead was"undefined".
    `
    }
}