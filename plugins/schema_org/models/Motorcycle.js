const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Motorcycle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Motorcycle] })
}