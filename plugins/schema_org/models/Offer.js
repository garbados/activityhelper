const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Offer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Offer] })
}