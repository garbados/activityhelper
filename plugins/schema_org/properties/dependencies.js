const { context } = require('../base')

module.exports = function (API) {
  class Dependencies extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Dependencies] })
}