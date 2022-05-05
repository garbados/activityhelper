const { context } = require('../base')

module.exports = function (API) {
  class BusNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BusNumber] })
}