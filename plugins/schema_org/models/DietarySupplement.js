const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DietarySupplement extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DietarySupplement] })
}