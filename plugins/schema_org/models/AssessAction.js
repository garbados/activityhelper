const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AssessAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AssessAction] })
}