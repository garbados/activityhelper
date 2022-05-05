const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Store extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Store] })
}