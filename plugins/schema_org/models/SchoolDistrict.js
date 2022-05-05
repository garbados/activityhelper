const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SchoolDistrict extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SchoolDistrict] })
}