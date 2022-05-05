const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PerformingArtsTheater extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PerformingArtsTheater] })
}