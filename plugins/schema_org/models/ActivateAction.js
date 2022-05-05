const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ActivateAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ActivateAction] })
}