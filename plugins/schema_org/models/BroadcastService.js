const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BroadcastService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BroadcastService] })
}