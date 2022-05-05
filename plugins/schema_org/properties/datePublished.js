const { context } = require('../base')

module.exports = function (API) {
  class DatePublished extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DatePublished] })
}