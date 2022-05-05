const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Menu extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Menu] })
}