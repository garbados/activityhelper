const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Psychiatric extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Psychiatric] })
}