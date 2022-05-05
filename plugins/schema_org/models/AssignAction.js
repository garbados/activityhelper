const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AssignAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AssignAction] })
}