const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HardwareStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HardwareStore] })
}