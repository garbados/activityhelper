const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DemoGameAvailability extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DemoGameAvailability] })
}