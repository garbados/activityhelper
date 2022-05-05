const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Substance extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Substance] })
}