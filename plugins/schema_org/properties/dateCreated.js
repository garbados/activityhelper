const { context } = require('../base')

module.exports = function (API) {
  class DateCreated extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DateCreated] })
}