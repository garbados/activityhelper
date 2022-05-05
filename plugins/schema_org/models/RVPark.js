const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RVPark extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RVPark] })
}