const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EUEnergyEfficiencyCategoryF extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EUEnergyEfficiencyCategoryF] })
}