const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupHusky extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupHusky] })
}