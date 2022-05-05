const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReserveAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReserveAction] })
}