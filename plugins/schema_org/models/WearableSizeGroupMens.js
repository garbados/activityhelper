const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupMens extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupMens] })
}