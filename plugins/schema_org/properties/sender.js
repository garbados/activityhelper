const { context } = require('../base')

module.exports = function (API) {
  class Sender extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Sender] })
}