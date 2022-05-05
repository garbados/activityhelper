const { context } = require('../base')

module.exports = function (API) {
  class WebCheckinTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WebCheckinTime] })
}