const { context } = require('../base')

module.exports = function (API) {
  class SuccessorOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SuccessorOf] })
}