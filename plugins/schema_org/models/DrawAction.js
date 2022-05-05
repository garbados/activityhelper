const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DrawAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DrawAction] })
}