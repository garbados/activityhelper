const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PercutaneousProcedure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PercutaneousProcedure] })
}