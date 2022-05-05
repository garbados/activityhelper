const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Pond extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Pond] })
}