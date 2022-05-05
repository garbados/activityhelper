const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class False extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [False] })
}