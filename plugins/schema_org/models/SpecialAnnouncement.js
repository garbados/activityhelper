const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SpecialAnnouncement extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SpecialAnnouncement] })
}