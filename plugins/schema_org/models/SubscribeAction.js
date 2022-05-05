const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SubscribeAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SubscribeAction] })
}