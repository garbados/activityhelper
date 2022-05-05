const { context } = require('../base')

module.exports = function (API) {
  class PreviousStartDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PreviousStartDate] })
}