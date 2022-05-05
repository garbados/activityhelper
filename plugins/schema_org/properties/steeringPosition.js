const { context } = require('../base')

module.exports = function (API) {
  class SteeringPosition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SteeringPosition] })
}