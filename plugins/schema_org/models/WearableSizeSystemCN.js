const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemCN extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemCN] })
}