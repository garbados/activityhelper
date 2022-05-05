const { context } = require('../base')

module.exports = function (API) {
  class TransitTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TransitTime] })
}