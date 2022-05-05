const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Person extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Person] })
}