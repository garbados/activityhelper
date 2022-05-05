const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DrugPregnancyCategory extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DrugPregnancyCategory] })
}