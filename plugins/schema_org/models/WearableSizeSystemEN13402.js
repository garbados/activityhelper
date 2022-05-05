const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemEN13402 extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemEN13402] })
}