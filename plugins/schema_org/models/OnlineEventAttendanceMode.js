const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OnlineEventAttendanceMode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OnlineEventAttendanceMode] })
}