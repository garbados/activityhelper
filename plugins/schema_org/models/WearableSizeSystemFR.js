const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemFR extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemFR] })
}