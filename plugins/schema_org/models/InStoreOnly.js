const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InStoreOnly extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InStoreOnly] })
}