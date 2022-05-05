const { context } = require('../base')

module.exports = function (API) {
  class RepeatCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RepeatCount] })
}