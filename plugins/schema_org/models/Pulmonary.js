const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Pulmonary extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Pulmonary] })
}