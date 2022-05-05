const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalWebPage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalWebPage] })
}