const { context } = require('../base')

module.exports = function (API) {
  class ActionStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ActionStatus] })
}