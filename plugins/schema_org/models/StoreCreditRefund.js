const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class StoreCreditRefund extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [StoreCreditRefund] })
}