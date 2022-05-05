const { context } = require('../base')

module.exports = function (API) {
  class FaxNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FaxNumber] })
}