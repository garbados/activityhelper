const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SuspendAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SuspendAction] })
}