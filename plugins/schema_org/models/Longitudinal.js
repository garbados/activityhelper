const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Longitudinal extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Longitudinal] })
}