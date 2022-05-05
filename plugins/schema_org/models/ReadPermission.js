const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReadPermission extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReadPermission] })
}