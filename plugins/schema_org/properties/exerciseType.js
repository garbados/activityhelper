const { context } = require('../base')

module.exports = function (API) {
  class ExerciseType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ExerciseType] })
}