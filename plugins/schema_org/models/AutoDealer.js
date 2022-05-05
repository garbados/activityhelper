const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AutoDealer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AutoDealer] })
}