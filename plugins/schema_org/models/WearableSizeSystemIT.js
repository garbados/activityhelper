const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemIT extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemIT] })
}