const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class IgnoreAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [IgnoreAction] })
}