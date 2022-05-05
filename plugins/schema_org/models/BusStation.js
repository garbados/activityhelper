const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BusStation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BusStation] })
}