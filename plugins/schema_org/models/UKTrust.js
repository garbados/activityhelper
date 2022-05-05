const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UKTrust extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UKTrust] })
}