const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Claim extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Claim] })
}