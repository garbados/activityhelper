const { context } = require('../base')

module.exports = function (API) {
  class MinValue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MinValue] })
}