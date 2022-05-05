const { context } = require('../base')

module.exports = function (API) {
  class BusinessDays extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BusinessDays] })
}