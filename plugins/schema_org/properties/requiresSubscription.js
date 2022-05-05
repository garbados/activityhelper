const { context } = require('../base')

module.exports = function (API) {
  class RequiresSubscription extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RequiresSubscription] })
}