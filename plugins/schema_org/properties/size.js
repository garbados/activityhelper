const { context } = require('../base')

module.exports = function (API) {
  class Size extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Size] })
}