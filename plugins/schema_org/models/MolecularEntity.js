const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MolecularEntity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MolecularEntity] })
}