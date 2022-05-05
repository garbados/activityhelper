const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MobileWebPlatform extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MobileWebPlatform] })
}