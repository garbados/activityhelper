const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnAction] })
}