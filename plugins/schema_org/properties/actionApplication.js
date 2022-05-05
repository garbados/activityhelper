const { context } = require('../base')

module.exports = function (API) {
  class ActionApplication extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ActionApplication] })
}