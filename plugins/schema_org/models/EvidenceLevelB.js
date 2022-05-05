const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EvidenceLevelB extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EvidenceLevelB] })
}