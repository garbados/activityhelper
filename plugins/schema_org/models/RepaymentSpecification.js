const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RepaymentSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RepaymentSpecification] })
}