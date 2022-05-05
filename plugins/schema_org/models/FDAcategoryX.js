const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FDAcategoryX extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FDAcategoryX] })
}