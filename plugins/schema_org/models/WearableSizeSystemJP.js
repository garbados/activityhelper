const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemJP extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemJP] })
}