const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WarrantyScope extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WarrantyScope] })
}