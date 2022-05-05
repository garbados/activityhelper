const { context } = require('../base')

module.exports = function (API) {
  class Amount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Amount] })
}