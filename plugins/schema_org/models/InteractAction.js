const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InteractAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InteractAction] })
}