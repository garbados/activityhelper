const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LodgingBusiness extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LodgingBusiness] })
}