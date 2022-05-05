const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Festival extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Festival] })
}