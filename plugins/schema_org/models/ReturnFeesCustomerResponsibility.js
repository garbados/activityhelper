const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnFeesCustomerResponsibility extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnFeesCustomerResponsibility] })
}