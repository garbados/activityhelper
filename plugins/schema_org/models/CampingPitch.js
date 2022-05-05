const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CampingPitch extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CampingPitch] })
}