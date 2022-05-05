const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Suspended extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Suspended] })
}