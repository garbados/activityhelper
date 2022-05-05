const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BroadcastRelease extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BroadcastRelease] })
}