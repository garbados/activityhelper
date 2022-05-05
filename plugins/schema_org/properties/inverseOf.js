const { context } = require('../base')

module.exports = function (API) {
  class InverseOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InverseOf] })
}