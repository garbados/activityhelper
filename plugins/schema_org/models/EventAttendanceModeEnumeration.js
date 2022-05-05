const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EventAttendanceModeEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EventAttendanceModeEnumeration] })
}