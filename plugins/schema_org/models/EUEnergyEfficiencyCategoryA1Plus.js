const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EUEnergyEfficiencyCategoryA1Plus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EUEnergyEfficiencyCategoryA1Plus] })
}