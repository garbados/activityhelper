const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CheckAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CheckAction] })
}