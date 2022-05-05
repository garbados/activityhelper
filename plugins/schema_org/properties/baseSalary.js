const { context } = require('../base')

module.exports = function (API) {
  class BaseSalary extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BaseSalary] })
}