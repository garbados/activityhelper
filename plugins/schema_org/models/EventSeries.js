const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EventSeries extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EventSeries] })
}