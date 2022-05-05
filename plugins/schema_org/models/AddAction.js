const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AddAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AddAction] })
}