const { context } = require('../base')

module.exports = function (API) {
  class AnswerExplanation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AnswerExplanation] })
}