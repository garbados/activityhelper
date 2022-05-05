const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CharitableIncorporatedOrganization extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CharitableIncorporatedOrganization] })
}