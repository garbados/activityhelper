const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UnclassifiedAdultConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UnclassifiedAdultConsideration] })
}