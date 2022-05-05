const { context } = require('../base')

module.exports = function (API) {
  class FoundingDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FoundingDate] })
}