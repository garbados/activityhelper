const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Researcher extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Researcher] })
}