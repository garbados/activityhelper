const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SurgicalProcedure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SurgicalProcedure] })
}