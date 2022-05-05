const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BusStop extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BusStop] })
}