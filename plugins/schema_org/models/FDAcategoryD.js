const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FDAcategoryD extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FDAcategoryD] })
}