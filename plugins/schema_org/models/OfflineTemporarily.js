const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OfflineTemporarily extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OfflineTemporarily] })
}