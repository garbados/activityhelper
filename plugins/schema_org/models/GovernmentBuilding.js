const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GovernmentBuilding extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GovernmentBuilding] })
}