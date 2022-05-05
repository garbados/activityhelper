const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Recipe extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Recipe] })
}