const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TobaccoNicotineConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TobaccoNicotineConsideration] })
}