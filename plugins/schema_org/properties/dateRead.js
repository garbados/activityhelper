const { context } = require('../base')

module.exports = function (API) {
  class DateRead extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DateRead] })
}