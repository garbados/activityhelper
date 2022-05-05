const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VeterinaryCare extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VeterinaryCare] })
}