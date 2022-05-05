const { context } = require('../base')

module.exports = function (API) {
  class JobStartDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [JobStartDate] })
}