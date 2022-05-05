const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderAction] })
}