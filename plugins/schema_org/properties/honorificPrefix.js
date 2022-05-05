const { context } = require('../base')

module.exports = function (API) {
  class HonorificPrefix extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HonorificPrefix] })
}