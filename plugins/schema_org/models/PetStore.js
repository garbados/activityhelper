const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PetStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PetStore] })
}