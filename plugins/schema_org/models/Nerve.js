const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nerve extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nerve] })
}