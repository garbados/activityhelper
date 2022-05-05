const { context } = require('../base')

module.exports = function (API) {
  class SubEvent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SubEvent] })
}