const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UseAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UseAction] })
}