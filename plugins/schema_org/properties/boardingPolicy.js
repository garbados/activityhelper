const { context } = require('../base')

module.exports = function (API) {
  class BoardingPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BoardingPolicy] })
}