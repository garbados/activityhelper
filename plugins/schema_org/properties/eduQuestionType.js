const { context } = require('../base')

module.exports = function (API) {
  class EduQuestionType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EduQuestionType] })
}