const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ParcelService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ParcelService] })
}