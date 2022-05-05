const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TelevisionStation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TelevisionStation] })
}