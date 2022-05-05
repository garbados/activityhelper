const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InStock extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InStock] })
}