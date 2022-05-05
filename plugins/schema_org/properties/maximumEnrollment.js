const { context } = require('../base')

module.exports = function (API) {
  class MaximumEnrollment extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MaximumEnrollment] })
}