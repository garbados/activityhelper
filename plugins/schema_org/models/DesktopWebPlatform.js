const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DesktopWebPlatform extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DesktopWebPlatform] })
}