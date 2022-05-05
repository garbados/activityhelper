const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LocalBusiness extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LocalBusiness] })
}