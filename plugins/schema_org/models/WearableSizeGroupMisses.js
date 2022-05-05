const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupMisses extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupMisses] })
}