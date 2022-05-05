const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemEurope extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemEurope] })
}