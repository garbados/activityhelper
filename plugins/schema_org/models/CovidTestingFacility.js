const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CovidTestingFacility extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CovidTestingFacility] })
}