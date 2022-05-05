const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Vehicle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Vehicle] })
}