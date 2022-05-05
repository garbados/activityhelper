const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FDAnotEvaluated extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FDAnotEvaluated] })
}