const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReimbursementCap extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReimbursementCap] })
}