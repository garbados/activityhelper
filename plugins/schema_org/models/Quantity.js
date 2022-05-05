const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Quantity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Quantity] })
}