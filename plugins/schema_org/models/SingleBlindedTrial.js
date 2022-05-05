const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SingleBlindedTrial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SingleBlindedTrial] })
}