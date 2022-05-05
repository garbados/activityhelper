const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemBR extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemBR] })
}