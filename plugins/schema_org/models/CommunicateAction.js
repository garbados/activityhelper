const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CommunicateAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CommunicateAction] })
}