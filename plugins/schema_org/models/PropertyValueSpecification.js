const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PropertyValueSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PropertyValueSpecification] })
}