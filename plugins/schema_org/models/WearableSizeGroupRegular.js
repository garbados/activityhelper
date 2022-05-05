const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupRegular extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupRegular] })
}