const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SolveMathAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SolveMathAction] })
}