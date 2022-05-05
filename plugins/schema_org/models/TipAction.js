const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TipAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TipAction] })
}