const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ExerciseGym extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ExerciseGym] })
}