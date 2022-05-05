const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GameServerStatus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GameServerStatus] })
}