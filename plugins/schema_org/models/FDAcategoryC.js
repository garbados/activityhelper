const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FDAcategoryC extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FDAcategoryC] })
}