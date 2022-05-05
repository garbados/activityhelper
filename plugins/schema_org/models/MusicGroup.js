const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusicGroup extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusicGroup] })
}