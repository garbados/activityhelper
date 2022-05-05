const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OnlineOnly extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OnlineOnly] })
}