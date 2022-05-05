const { context } = require('../base')

module.exports = function (API) {
  class Endorsee extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Endorsee] })
}