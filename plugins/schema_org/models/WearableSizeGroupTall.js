const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupTall extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupTall] })
}