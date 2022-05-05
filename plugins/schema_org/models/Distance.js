const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Distance extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Distance] })
}