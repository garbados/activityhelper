const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GovernmentPermit extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GovernmentPermit] })
}