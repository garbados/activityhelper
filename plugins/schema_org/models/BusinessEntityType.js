const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BusinessEntityType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BusinessEntityType] })
}