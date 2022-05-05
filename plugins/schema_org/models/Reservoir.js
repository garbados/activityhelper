const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Reservoir extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Reservoir] })
}