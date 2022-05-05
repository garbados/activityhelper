const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ListenAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ListenAction] })
}