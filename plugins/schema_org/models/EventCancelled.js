const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EventCancelled extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EventCancelled] })
}