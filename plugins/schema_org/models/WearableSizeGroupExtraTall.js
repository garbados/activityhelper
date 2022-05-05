const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupExtraTall extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupExtraTall] })
}