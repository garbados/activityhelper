const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ExerciseAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ExerciseAction] })
}