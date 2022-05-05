const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ImageObjectSnapshot extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ImageObjectSnapshot] })
}