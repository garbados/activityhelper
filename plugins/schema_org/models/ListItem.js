const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ListItem extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ListItem] })
}