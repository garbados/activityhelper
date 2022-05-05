const { context } = require('../base')

module.exports = function (API) {
  class DriveWheelConfiguration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DriveWheelConfiguration] })
}