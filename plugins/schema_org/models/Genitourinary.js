const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Genitourinary extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Genitourinary] })
}