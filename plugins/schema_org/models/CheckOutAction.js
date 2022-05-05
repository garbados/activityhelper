const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CheckOutAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CheckOutAction] })
}