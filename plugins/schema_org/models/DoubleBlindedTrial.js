const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DoubleBlindedTrial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DoubleBlindedTrial] })
}