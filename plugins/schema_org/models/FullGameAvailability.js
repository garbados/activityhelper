const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FullGameAvailability extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FullGameAvailability] })
}