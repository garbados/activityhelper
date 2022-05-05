const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Periodical extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Periodical] })
}