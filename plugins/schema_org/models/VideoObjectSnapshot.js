const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VideoObjectSnapshot extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VideoObjectSnapshot] })
}