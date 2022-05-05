const { context } = require('../base')

module.exports = function (API) {
  class ActionOption extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ActionOption] })
}