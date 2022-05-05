const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Ticket extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Ticket] })
}