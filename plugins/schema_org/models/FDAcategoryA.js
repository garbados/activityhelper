const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FDAcategoryA extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FDAcategoryA] })
}