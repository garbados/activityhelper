const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DistanceFee extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DistanceFee] })
}