const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RoofingContractor extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RoofingContractor] })
}