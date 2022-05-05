const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OutOfStock extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OutOfStock] })
}