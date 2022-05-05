const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Country extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Country] })
}