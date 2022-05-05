const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BroadcastChannel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BroadcastChannel] })
}