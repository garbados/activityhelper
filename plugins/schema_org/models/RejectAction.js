const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RejectAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RejectAction] })
}