const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Clinician extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Clinician] })
}