const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupJuniors extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupJuniors] })
}