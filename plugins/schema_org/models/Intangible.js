const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Intangible extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Intangible] })
}