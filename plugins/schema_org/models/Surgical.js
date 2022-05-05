const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Surgical extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Surgical] })
}