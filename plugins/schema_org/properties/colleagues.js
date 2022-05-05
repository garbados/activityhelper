const { context } = require('../base')

module.exports = function (API) {
  class Colleagues extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Colleagues] })
}