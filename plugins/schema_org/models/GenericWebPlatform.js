const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GenericWebPlatform extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GenericWebPlatform] })
}