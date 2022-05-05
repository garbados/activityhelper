const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Role extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Role] })
}