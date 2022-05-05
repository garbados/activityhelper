const { context } = require('../base')

module.exports = function (API) {
  class ContainedIn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContainedIn] })
}