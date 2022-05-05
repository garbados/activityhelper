const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UnemploymentSupport extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UnemploymentSupport] })
}