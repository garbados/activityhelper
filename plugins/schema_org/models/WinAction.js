const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WinAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WinAction] })
}