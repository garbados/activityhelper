const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EventVenue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EventVenue] })
}