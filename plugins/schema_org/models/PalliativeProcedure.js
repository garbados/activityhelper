const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PalliativeProcedure extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PalliativeProcedure] })
}