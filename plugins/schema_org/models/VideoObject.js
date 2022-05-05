const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VideoObject extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VideoObject] })
}