const { context } = require('../base')

module.exports = function (API) {
  class NerveMotor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NerveMotor] })
}