const { context } = require('../base')

module.exports = function (API) {
  class DatePosted extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DatePosted] })
}