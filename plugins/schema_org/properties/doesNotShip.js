const { context } = require('../base')

module.exports = function (API) {
  class DoesNotShip extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DoesNotShip] })
}