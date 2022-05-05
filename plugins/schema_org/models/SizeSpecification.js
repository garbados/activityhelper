const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SizeSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SizeSpecification] })
}