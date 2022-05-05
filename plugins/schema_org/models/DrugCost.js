const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DrugCost extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DrugCost] })
}