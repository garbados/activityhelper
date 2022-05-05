const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Hospital extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Hospital] })
}