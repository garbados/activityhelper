const { context } = require('../base')

module.exports = function (API) {
  class MaxValue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MaxValue] })
}