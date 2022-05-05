const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Consortium extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Consortium] })
}