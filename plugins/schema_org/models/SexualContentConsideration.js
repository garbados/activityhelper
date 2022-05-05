const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SexualContentConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SexualContentConsideration] })
}