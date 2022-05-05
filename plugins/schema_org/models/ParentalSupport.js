const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ParentalSupport extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ParentalSupport] })
}