const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class True extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [True] })
}