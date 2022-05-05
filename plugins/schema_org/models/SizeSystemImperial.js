const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SizeSystemImperial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SizeSystemImperial] })
}