const { context } = require('../base')

module.exports = function (API) {
  class PrepTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PrepTime] })
}