const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InformAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InformAction] })
}