const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Quotation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Quotation] })
}