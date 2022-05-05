const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Toxicologic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Toxicologic] })
}