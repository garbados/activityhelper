const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ScreeningEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ScreeningEvent] })
}