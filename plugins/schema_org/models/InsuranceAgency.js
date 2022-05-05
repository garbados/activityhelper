const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InsuranceAgency extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InsuranceAgency] })
}