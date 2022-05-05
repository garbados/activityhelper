const { context } = require('../base')

module.exports = function (API) {
  class SalaryUponCompletion extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SalaryUponCompletion] })
}