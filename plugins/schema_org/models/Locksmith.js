const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Locksmith extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Locksmith] })
}