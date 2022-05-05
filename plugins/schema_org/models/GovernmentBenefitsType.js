const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GovernmentBenefitsType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GovernmentBenefitsType] })
}