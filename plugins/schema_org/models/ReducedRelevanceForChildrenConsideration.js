const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReducedRelevanceForChildrenConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReducedRelevanceForChildrenConsideration] })
}