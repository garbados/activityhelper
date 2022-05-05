const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LimitedAvailability extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LimitedAvailability] })
}