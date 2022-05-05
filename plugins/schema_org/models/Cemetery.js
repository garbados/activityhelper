const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Cemetery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Cemetery] })
}