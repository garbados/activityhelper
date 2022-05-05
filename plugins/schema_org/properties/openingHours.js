const { context } = require('../base')

module.exports = function (API) {
  class OpeningHours extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OpeningHours] })
}