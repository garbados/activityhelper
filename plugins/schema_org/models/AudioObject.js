const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AudioObject extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AudioObject] })
}