const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Poster extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Poster] })
}