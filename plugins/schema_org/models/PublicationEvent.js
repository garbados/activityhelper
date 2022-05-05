const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PublicationEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PublicationEvent] })
}