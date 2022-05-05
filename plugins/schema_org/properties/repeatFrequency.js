const { context } = require('../base')

module.exports = function (API) {
  class RepeatFrequency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RepeatFrequency] })
}