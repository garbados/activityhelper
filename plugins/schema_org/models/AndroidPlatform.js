const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AndroidPlatform extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AndroidPlatform] })
}