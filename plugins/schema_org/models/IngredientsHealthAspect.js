const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class IngredientsHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [IngredientsHealthAspect] })
}