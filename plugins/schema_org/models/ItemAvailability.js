const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ItemAvailability extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ItemAvailability] })
}