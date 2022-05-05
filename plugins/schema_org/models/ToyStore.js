const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ToyStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ToyStore] })
}