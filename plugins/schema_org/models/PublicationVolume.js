const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PublicationVolume extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PublicationVolume] })
}