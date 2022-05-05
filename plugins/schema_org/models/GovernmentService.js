const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GovernmentService extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GovernmentService] })
}