const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WarrantyPromise extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WarrantyPromise] })
}