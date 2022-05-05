const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemContinental extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemContinental] })
}