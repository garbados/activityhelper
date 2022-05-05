const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RsvpAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RsvpAction] })
}