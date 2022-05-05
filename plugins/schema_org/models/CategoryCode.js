const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CategoryCode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CategoryCode] })
}