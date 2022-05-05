const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SpeakableSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SpeakableSpecification] })
}