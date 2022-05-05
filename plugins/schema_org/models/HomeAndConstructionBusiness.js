const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HomeAndConstructionBusiness extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HomeAndConstructionBusiness] })
}