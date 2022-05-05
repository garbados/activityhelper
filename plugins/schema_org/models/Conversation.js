const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Conversation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Conversation] })
}