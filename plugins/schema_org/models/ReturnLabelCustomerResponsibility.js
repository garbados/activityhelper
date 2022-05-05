const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnLabelCustomerResponsibility extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnLabelCustomerResponsibility] })
}