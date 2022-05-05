const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserCheckins extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserCheckins] })
}