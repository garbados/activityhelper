const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SatireOrParodyContent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SatireOrParodyContent] })
}