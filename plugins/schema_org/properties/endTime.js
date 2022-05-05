const { context } = require('../base')

module.exports = function (API) {
  class EndTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EndTime] })
}