const { context } = require('../base')

module.exports = function (API) {
  class NoBylinesPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NoBylinesPolicy] })
}