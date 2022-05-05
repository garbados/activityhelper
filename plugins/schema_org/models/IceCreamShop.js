const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class IceCreamShop extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [IceCreamShop] })
}