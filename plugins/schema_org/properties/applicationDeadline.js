const { context } = require('../base')

module.exports = function (API) {
  class ApplicationDeadline extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ApplicationDeadline] })
}