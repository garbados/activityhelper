const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReceiveAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReceiveAction] })
}