const { context } = require('../base')

module.exports = function (API) {
  class CheckinTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CheckinTime] })
}