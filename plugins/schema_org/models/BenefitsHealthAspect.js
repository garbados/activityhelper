const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BenefitsHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BenefitsHealthAspect] })
}