const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Demand extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Demand] })
}