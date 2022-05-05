const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemEnumeration] })
}