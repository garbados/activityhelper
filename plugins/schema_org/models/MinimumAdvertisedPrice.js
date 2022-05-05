const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MinimumAdvertisedPrice extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MinimumAdvertisedPrice] })
}