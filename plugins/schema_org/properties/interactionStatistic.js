const { context } = require('../base')

module.exports = function (API) {
  class InteractionStatistic extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InteractionStatistic] })
}