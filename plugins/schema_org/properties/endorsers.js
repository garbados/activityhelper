const { context } = require('../base')

module.exports = function (API) {
  class Endorsers extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Endorsers] })
}