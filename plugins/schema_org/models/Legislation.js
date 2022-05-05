const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Legislation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Legislation] })
}