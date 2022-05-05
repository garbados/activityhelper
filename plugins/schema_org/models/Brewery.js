const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Brewery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Brewery] })
}