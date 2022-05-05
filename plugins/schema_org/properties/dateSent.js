const { context } = require('../base')

module.exports = function (API) {
  class DateSent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DateSent] })
}