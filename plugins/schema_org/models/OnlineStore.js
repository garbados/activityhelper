const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OnlineStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OnlineStore] })
}