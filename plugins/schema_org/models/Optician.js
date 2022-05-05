const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Optician extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Optician] })
}