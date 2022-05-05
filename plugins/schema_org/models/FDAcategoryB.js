const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FDAcategoryB extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FDAcategoryB] })
}