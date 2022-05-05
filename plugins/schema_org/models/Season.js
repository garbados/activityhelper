const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Season extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Season] })
}