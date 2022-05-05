const { context } = require('../base')

module.exports = function (API) {
  class AccelerationTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccelerationTime] })
}