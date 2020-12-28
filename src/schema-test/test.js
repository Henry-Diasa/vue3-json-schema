const Ajv = require("ajv").default
var localize = require('ajv-i18n');
const schema = {
    type: 'string',
    minLength: 10,
    errorMessage: {
        type: '11111',
        minLength: '222'
    }
}
const ajv = new Ajv({ allErrors: true }) // options can be passed, e.g. {allErrors: true}
require("ajv-errors")(ajv);
const validate = ajv.compile(schema)
const valid = validate(111)
if (!valid) {
    localize.zh(validate.errors)
    console.log(validate.errors)
} 