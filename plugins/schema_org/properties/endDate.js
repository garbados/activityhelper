const { context } = require('../base')

module.exports = function (API) {
  class EndDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EndDate] })
}