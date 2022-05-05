const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Painting extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Painting] })
}