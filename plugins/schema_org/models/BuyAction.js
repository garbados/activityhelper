const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BuyAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BuyAction] })
}