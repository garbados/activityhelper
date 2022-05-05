const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InternationalTrial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InternationalTrial] })
}