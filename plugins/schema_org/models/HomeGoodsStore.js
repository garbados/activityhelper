const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HomeGoodsStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HomeGoodsStore] })
}