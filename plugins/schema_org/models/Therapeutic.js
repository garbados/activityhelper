const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Therapeutic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Therapeutic] })
}