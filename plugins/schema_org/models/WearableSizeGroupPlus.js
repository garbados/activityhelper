const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupPlus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupPlus] })
}