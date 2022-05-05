const { context } = require('../base')

module.exports = function (API) {
  class ActivityDuration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ActivityDuration] })
}