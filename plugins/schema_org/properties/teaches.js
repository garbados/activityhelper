const { context } = require('../base')

module.exports = function (API) {
  class Teaches extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Teaches] })
}