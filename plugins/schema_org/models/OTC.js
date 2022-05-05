const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OTC extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OTC] })
}