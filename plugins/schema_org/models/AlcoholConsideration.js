const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AlcoholConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AlcoholConsideration] })
}