const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserInteraction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserInteraction] })
}