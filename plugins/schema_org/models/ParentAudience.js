const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ParentAudience extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ParentAudience] })
}