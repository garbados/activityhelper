const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UpdateAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UpdateAction] })
}