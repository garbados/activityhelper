const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Float extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Float] })
}