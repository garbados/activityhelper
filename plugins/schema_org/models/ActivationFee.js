const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ActivationFee extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ActivationFee] })
}