const { context } = require('../base')

module.exports = function (API) {
  class EmployerOverview extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EmployerOverview] })
}