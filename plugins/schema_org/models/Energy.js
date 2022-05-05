const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Energy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Energy] })
}