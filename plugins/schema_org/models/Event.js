const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Event extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Event] })
}