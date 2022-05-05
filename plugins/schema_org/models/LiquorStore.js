const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LiquorStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LiquorStore] })
}