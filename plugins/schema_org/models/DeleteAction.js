const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DeleteAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DeleteAction] })
}