const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WholesaleStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WholesaleStore] })
}