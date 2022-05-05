const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BoardingPolicyType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BoardingPolicyType] })
}