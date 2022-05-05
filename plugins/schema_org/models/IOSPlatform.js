const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class IOSPlatform extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [IOSPlatform] })
}