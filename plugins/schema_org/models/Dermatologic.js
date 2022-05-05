const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Dermatologic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Dermatologic] })
}