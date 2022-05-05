const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WantAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WantAction] })
}