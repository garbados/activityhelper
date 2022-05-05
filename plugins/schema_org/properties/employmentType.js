const { context } = require('../base')

module.exports = function (API) {
  class EmploymentType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EmploymentType] })
}