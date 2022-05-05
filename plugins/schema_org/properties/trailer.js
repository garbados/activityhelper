const { context } = require('../base')

module.exports = function (API) {
  class Trailer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Trailer] })
}