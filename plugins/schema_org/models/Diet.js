const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Diet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Diet] })
}