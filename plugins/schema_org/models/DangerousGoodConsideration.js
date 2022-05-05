const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DangerousGoodConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DangerousGoodConsideration] })
}