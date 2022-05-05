const { context } = require('../base')

module.exports = function (API) {
  class ProcessingTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProcessingTime] })
}