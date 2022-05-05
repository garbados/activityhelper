const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LegislationObject extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LegislationObject] })
}