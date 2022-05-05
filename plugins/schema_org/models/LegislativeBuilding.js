const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LegislativeBuilding extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LegislativeBuilding] })
}