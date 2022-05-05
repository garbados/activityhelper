const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PerformAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PerformAction] })
}