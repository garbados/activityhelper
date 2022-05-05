const { context } = require('../base')

module.exports = function (API) {
  class WordCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WordCount] })
}