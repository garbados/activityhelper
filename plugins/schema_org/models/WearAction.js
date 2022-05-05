const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearAction] })
}