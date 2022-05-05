const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MenuSection extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MenuSection] })
}