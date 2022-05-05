const { context } = require('../base')

module.exports = function (API) {
  class Median extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Median] })
}