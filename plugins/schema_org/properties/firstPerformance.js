const { context } = require('../base')

module.exports = function (API) {
  class FirstPerformance extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FirstPerformance] })
}