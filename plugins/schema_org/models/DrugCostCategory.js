const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DrugCostCategory extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DrugCostCategory] })
}