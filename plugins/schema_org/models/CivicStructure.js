const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CivicStructure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CivicStructure] })
}