const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MediaObject extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MediaObject] })
}