const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Continent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Continent] })
}