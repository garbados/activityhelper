const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Hotel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Hotel] })
}