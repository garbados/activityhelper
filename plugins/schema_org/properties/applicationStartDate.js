const { context } = require('../base')

module.exports = function (API) {
  class ApplicationStartDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ApplicationStartDate] })
}