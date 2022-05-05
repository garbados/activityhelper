const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GiveAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GiveAction] })
}