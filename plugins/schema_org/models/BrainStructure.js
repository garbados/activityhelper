const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BrainStructure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BrainStructure] })
}