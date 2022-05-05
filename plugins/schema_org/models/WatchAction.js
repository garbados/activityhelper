const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WatchAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WatchAction] })
}