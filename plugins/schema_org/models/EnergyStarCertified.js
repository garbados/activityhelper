const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EnergyStarCertified extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EnergyStarCertified] })
}