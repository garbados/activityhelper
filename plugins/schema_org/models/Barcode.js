const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Barcode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Barcode] })
}