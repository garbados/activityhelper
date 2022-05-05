const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BasicIncome extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BasicIncome] })
}