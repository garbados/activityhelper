const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TherapeuticProcedure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TherapeuticProcedure] })
}