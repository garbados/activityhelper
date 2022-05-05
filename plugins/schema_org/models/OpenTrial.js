const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OpenTrial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OpenTrial] })
}