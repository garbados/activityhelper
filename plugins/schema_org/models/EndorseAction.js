const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EndorseAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EndorseAction] })
}