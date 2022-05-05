const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TrackAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TrackAction] })
}