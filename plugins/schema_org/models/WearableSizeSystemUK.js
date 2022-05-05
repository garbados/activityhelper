const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemUK extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemUK] })
}