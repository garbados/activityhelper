const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MeetingRoom extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MeetingRoom] })
}