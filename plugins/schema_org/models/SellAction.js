const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SellAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SellAction] })
}