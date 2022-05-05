const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PlayGameAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PlayGameAction] })
}