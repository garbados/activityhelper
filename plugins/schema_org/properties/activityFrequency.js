const { context } = require('../base')

module.exports = function (API) {
  class ActivityFrequency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ActivityFrequency] })
}