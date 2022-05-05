const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MiddleSchool extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MiddleSchool] })
}