const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalImagingTechnique extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalImagingTechnique] })
}