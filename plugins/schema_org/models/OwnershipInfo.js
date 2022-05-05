const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OwnershipInfo extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OwnershipInfo] })
}