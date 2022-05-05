const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupGirls extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupGirls] })
}