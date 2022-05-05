const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EvidenceLevelA extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EvidenceLevelA] })
}