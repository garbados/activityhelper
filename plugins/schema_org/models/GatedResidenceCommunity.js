const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GatedResidenceCommunity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GatedResidenceCommunity] })
}