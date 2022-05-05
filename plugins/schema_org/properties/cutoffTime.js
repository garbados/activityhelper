const { context } = require('../base')

module.exports = function (API) {
  class CutoffTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CutoffTime] })
}