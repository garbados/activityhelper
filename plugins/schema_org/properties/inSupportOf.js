const { context } = require('../base')

module.exports = function (API) {
  class InSupportOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InSupportOf] })
}