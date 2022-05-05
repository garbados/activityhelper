const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SportingGoodsStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SportingGoodsStore] })
}