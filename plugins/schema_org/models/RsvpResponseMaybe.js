const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RsvpResponseMaybe extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RsvpResponseMaybe] })
}