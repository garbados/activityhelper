const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EvidenceLevelC extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EvidenceLevelC] })
}