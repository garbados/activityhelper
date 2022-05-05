const { context } = require('../base')

module.exports = function (API) {
  class Time extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Time] })
}