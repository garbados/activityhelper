const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GasStation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GasStation] })
}