const { context } = require('../base')

module.exports = function (API) {
  class TransitTimeLabel extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TransitTimeLabel] })
}