const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Emergency extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Emergency] })
}