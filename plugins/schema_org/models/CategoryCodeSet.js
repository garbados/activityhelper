const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CategoryCodeSet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CategoryCodeSet] })
}