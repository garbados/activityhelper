const { context } = require('../base')

module.exports = function (API) {
  class DateModified extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DateModified] })
}