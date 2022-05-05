const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PET extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PET] })
}