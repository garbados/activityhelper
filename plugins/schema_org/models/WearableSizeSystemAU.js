const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemAU extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemAU] })
}