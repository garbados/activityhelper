const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Game extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Game] })
}