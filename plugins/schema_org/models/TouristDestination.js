const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TouristDestination extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TouristDestination] })
}