const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DepartAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DepartAction] })
}