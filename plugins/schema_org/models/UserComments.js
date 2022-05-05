const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserComments extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserComments] })
}