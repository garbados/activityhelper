const { context } = require('../base')

module.exports = function (API) {
  class Distribution extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Distribution] })
}