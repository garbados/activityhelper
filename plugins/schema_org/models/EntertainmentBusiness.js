const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EntertainmentBusiness extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EntertainmentBusiness] })
}