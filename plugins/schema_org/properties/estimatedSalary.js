const { context } = require('../base')

module.exports = function (API) {
  class EstimatedSalary extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EstimatedSalary] })
}