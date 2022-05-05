const { context } = require('../base')

module.exports = function (API) {
  class MinPrice extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MinPrice] })
}