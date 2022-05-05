const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Rheumatologic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Rheumatologic] })
}