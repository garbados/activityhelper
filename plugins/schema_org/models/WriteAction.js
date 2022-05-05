const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WriteAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WriteAction] })
}