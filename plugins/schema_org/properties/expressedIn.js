const { context } = require('../base')

module.exports = function (API) {
  class ExpressedIn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ExpressedIn] })
}