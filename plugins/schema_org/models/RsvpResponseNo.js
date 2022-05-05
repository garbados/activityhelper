const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RsvpResponseNo extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RsvpResponseNo] })
}