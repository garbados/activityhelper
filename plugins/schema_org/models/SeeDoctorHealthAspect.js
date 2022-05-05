const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SeeDoctorHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SeeDoctorHealthAspect] })
}