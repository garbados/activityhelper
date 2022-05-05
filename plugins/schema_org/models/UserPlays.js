const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserPlays extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserPlays] })
}