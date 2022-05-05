const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SoldOut extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SoldOut] })
}