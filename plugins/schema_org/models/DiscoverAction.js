const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DiscoverAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DiscoverAction] })
}