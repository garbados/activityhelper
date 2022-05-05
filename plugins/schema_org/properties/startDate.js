const { context } = require('../base')

module.exports = function (API) {
  class StartDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StartDate] })
}