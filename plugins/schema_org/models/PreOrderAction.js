const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PreOrderAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PreOrderAction] })
}