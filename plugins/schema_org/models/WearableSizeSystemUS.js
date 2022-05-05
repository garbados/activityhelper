const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemUS extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemUS] })
}