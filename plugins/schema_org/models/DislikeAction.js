const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DislikeAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DislikeAction] })
}