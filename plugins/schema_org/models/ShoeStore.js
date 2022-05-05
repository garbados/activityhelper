const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ShoeStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ShoeStore] })
}