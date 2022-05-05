const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TripleBlindedTrial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TripleBlindedTrial] })
}