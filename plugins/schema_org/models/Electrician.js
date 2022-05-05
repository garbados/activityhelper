const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Electrician extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Electrician] })
}