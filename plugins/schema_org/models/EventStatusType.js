const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EventStatusType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EventStatusType] })
}