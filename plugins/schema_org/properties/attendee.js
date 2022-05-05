const { context } = require('../base')

module.exports = function (API) {
  class Attendee extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Attendee] })
}