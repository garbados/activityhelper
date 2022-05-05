const { context } = require('../base')

module.exports = function (API) {
  class HandlingTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HandlingTime] })
}