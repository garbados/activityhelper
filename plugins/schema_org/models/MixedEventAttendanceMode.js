const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MixedEventAttendanceMode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MixedEventAttendanceMode] })
}