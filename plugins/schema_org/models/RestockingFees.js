const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RestockingFees extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RestockingFees] })
}