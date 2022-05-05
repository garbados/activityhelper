const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BroadcastEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BroadcastEvent] })
}