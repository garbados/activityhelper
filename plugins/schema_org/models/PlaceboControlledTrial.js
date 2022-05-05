const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PlaceboControlledTrial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PlaceboControlledTrial] })
}