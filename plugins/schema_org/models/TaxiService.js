const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TaxiService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TaxiService] })
}