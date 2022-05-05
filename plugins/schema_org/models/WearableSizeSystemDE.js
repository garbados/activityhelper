const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeSystemDE extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeSystemDE] })
}