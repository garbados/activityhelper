const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UKNonprofitType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UKNonprofitType] })
}