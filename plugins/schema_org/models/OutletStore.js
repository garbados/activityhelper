const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OutletStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OutletStore] })
}