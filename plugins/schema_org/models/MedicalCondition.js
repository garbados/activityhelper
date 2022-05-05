const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalCondition extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalCondition] })
}