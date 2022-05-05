const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PostalCodeRangeSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PostalCodeRangeSpecification] })
}