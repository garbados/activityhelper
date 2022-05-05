const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DisagreeAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DisagreeAction] })
}