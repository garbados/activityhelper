const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Discontinued extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Discontinued] })
}