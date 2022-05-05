const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RealEstateAgent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RealEstateAgent] })
}