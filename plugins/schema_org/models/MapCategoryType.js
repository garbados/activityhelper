const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MapCategoryType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MapCategoryType] })
}