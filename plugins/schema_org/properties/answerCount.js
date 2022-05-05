const { context } = require('../base')

module.exports = function (API) {
  class AnswerCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AnswerCount] })
}