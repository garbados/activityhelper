const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DeactivateAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DeactivateAction] })
}