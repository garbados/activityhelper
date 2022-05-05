const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AllocateAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AllocateAction] })
}