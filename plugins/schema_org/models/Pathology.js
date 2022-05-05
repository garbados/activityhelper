const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Pathology extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Pathology] })
}