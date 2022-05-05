const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AudiobookFormat extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AudiobookFormat] })
}