const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Gene extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Gene] })
}