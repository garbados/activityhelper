const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Property extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Property] })
}