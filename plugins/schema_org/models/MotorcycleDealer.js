const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MotorcycleDealer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MotorcycleDealer] })
}