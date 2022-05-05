const { context } = require('../base')

module.exports = function (API) {
  class Coach extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Coach] })
}