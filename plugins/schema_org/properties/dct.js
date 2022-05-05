const { context } = require('../base')

module.exports = function (API) {
  class Dct extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Dct] })
}