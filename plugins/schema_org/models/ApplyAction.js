const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ApplyAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ApplyAction] })
}