const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BackOrder extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BackOrder] })
}