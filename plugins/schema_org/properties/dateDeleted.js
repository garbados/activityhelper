const { context } = require('../base')

module.exports = function (API) {
  class DateDeleted extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DateDeleted] })
}