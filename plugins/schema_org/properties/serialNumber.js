const { context } = require('../base')

module.exports = function (API) {
  class SerialNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SerialNumber] })
}