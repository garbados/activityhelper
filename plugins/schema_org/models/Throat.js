const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Throat extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Throat] })
}