const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EmploymentAgency extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EmploymentAgency] })
}