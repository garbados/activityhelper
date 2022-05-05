const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CDFormat extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CDFormat] })
}