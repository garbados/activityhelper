const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CookAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CookAction] })
}