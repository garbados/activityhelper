const { context } = require('../base')

module.exports = function (API) {
  class SizeSystem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SizeSystem] })
}