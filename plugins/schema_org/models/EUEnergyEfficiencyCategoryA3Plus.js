const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EUEnergyEfficiencyCategoryA3Plus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EUEnergyEfficiencyCategoryA3Plus] })
}