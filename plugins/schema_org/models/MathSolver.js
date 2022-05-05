const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MathSolver extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MathSolver] })
}