const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupBoys extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupBoys] })
}