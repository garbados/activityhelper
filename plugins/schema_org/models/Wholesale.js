const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Wholesale extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Wholesale] })
}