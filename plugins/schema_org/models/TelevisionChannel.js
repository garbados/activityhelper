const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TelevisionChannel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TelevisionChannel] })
}