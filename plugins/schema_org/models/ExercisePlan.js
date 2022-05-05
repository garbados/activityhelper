const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ExercisePlan extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ExercisePlan] })
}