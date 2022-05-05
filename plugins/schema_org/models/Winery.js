const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Winery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Winery] })
}