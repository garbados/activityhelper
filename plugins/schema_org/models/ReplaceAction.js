const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReplaceAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReplaceAction] })
}