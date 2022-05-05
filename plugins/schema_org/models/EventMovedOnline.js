const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EventMovedOnline extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EventMovedOnline] })
}