const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NarcoticConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NarcoticConsideration] })
}