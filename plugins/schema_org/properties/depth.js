const { context } = require('../base')

module.exports = function (API) {
  class Depth extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Depth] })
}