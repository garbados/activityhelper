const { context } = require('../base')

module.exports = function (API) {
  class DoorTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DoorTime] })
}