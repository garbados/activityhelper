const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Hematologic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Hematologic] })
}