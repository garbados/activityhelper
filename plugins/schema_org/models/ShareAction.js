const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ShareAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ShareAction] })
}