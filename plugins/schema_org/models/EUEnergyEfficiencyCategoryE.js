const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EUEnergyEfficiencyCategoryE extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EUEnergyEfficiencyCategoryE] })
}