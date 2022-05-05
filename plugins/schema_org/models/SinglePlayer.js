const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SinglePlayer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SinglePlayer] })
}