const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Recommendation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Recommendation] })
}