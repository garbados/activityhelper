const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VirtualLocation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VirtualLocation] })
}