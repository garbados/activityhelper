const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Synagogue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Synagogue] })
}