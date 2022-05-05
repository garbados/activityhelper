const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VitalSign extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VitalSign] })
}