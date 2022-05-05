const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GameAvailabilityEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GameAvailabilityEnumeration] })
}