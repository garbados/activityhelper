const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Chiropractic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Chiropractic] })
}