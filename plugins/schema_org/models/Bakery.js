const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Bakery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Bakery] })
}