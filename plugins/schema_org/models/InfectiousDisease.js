const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InfectiousDisease extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InfectiousDisease] })
}