const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderProcessing extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderProcessing] })
}