const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AudioObjectSnapshot extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AudioObjectSnapshot] })
}