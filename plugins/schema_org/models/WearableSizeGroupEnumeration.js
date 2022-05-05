const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupEnumeration] })
}