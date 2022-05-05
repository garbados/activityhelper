const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NoninvasiveProcedure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NoninvasiveProcedure] })
}