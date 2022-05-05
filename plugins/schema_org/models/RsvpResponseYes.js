const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RsvpResponseYes extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RsvpResponseYes] })
}