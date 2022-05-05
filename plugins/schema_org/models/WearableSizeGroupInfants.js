const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupInfants extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupInfants] })
}