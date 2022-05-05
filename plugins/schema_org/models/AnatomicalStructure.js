const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AnatomicalStructure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AnatomicalStructure] })
}