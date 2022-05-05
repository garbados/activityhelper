const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalTestPanel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalTestPanel] })
}