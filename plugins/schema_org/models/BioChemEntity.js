const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BioChemEntity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BioChemEntity] })
}