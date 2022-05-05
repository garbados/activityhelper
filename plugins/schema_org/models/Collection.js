const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Collection extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Collection] })
}