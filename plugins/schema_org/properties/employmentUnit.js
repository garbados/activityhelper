const { context } = require('../base')

module.exports = function (API) {
  class EmploymentUnit extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EmploymentUnit] })
}