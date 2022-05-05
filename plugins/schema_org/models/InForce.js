const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InForce extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InForce] })
}