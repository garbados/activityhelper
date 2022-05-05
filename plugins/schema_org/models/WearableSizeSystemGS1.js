const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemGS1 extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemGS1] })
}