const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HVACBusiness extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HVACBusiness] })
}