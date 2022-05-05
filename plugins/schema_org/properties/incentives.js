const { context } = require('../base')

module.exports = function (API) {
  class Incentives extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Incentives] })
}