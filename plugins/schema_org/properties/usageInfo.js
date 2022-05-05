const { context } = require('../base')

module.exports = function (API) {
  class UsageInfo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UsageInfo] })
}