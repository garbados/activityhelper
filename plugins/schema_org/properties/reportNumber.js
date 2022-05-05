const { context } = require('../base')

module.exports = function (API) {
  class ReportNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReportNumber] })
}