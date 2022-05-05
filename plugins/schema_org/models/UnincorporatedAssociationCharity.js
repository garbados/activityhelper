const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UnincorporatedAssociationCharity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UnincorporatedAssociationCharity] })
}