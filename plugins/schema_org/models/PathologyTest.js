const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PathologyTest extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PathologyTest] })
}