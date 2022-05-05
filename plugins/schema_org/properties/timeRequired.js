const { context } = require('../base')

module.exports = function (API) {
  class TimeRequired extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TimeRequired] })
}