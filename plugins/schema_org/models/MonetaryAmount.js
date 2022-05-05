const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MonetaryAmount extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MonetaryAmount] })
}