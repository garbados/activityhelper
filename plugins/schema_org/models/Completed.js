const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Completed extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Completed] })
}