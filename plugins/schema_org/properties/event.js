const { context } = require('../base')

module.exports = function (API) {
  class Event extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Event] })
}