const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Courthouse extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Courthouse] })
}