const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DrugLegalStatus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DrugLegalStatus] })
}