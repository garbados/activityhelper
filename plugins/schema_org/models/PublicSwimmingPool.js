const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PublicSwimmingPool extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PublicSwimmingPool] })
}