const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HealthAndBeautyBusiness extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HealthAndBeautyBusiness] })
}