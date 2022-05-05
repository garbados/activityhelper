const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TaxiStand extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TaxiStand] })
}