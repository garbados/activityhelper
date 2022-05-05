const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderProblem extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderProblem] })
}