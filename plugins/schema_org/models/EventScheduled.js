const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EventScheduled extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EventScheduled] })
}