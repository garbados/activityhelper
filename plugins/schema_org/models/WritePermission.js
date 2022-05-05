const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WritePermission extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WritePermission] })
}