const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Specialty extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Specialty] })
}