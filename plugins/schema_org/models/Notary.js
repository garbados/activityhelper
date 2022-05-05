const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Notary extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Notary] })
}