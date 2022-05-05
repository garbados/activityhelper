const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TieAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TieAction] })
}