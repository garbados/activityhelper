const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PawnShop extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PawnShop] })
}