const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GameServer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GameServer] })
}