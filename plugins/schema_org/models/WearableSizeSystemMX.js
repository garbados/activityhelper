const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemMX extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemMX] })
}