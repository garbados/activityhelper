const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PreOrder extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PreOrder] })
}