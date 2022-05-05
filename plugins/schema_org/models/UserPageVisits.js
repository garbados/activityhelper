const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserPageVisits extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserPageVisits] })
}