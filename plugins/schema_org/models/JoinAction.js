const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class JoinAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [JoinAction] })
}