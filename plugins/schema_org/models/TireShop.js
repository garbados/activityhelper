const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TireShop extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TireShop] })
}