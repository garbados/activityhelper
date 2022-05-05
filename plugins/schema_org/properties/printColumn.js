const { context } = require('../base')

module.exports = function (API) {
  class PrintColumn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PrintColumn] })
}