const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupExtraShort extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupExtraShort] })
}