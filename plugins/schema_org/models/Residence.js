const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Residence extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Residence] })
}