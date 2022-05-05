const { context } = require('../base')

module.exports = function (API) {
  class Replacee extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Replacee] })
}