const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ChemicalSubstance extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ChemicalSubstance] })
}