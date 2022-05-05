const { context } = require('../base')

module.exports = function (API) {
  class Owl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Owl] })
}