const { context } = require('../base')

module.exports = function (API) {
  class PrintPage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PrintPage] })
}