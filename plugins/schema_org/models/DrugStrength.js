const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DrugStrength extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DrugStrength] })
}