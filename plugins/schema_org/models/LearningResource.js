const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LearningResource extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LearningResource] })
}