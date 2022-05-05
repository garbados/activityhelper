const { context } = require('../base')

module.exports = function (API) {
  class MaximumIntake extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MaximumIntake] })
}