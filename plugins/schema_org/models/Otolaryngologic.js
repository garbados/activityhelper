const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Otolaryngologic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Otolaryngologic] })
}