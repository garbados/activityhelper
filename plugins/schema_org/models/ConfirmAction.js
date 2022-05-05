const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ConfirmAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ConfirmAction] })
}