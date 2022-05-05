const { context } = require('../base')

module.exports = function (API) {
  class ContainsPlace extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContainsPlace] })
}