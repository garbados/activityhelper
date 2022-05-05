const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Retail extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Retail] })
}