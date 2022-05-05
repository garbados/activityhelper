const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ComedyEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ComedyEvent] })
}