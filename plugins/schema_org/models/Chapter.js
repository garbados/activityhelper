const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Chapter extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Chapter] })
}