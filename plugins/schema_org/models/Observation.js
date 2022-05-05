const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Observation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Observation] })
}