const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserPlusOnes extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserPlusOnes] })
}