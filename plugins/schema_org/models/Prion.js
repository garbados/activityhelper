const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Prion extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Prion] })
}