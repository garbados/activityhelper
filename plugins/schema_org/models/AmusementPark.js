const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AmusementPark extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AmusementPark] })
}