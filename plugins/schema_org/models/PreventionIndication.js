const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PreventionIndication extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PreventionIndication] })
}