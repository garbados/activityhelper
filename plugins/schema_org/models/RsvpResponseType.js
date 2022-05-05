const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RsvpResponseType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RsvpResponseType] })
}