const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Downpayment extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Downpayment] })
}