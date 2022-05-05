const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OfflinePermanently extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OfflinePermanently] })
}