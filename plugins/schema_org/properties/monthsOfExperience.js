const { context } = require('../base')

module.exports = function (API) {
  class MonthsOfExperience extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MonthsOfExperience] })
}