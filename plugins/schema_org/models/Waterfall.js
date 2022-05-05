const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Waterfall extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Waterfall] })
}