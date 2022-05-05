const { context } = require('../base')

module.exports = function (API) {
  class NumberOfEmployees extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfEmployees] })
}