const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TravelAgency extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TravelAgency] })
}