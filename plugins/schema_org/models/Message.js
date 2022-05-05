const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Message extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Message] })
}