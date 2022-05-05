const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HobbyShop extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HobbyShop] })
}