const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Airport extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Airport] })
}